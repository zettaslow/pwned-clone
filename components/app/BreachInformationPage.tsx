import { useEffect, useState } from 'react';
import { useFormik } from "formik";
import { GetBreachesPerEmail } from '../../pages/api/checkBreach';
import styles from './BreachInformationPage.module.scss';
import { BreachInformationTable } from './BreachInformationTable';
import { BreachModel } from '../../models/Breach';

export interface BreachInformationPageProps {

}

export default function BreachInformationPage(props: BreachInformationPageProps) {
  const [breachData, setBreachData] = useState([]);

  const fetchBreachData = async (account: string) => {
    const result = await GetBreachesPerEmail(account);
    setBreachData(result.Breaches);
  }

  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: values => {
      fetchBreachData(values.email);
    },
    validate: (values) => {
      const errors: any = {};
    
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    
      return errors;
    }
  });



  return (
    <>
      <div className={styles.breachInfo}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="email" className={styles.fieldLabel}>
              Email:  
              <input
                type="email" 
                name="email" 
                autoComplete="off"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </label>
            <input type="submit" value="Submit"/>
            <div className={styles.formError}>
              {formik.errors.email}
            </div>
          </div>
        </form>
      </div>
      <div className={styles.breachTable}>
          { ( breachData && breachData.length !== 0) ? 
            <BreachInformationTable
              message="No breach data found"
              breaches={breachData}
            />
          :     
            "No breach Data Found"  
          }
      </div>
    </>
  )
}