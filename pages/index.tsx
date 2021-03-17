import Head from 'next/head'
import { MainLayout } from '../components/layout/MainLayout'
import styles from '../styles/Home.module.css'
import BreachInformation from './BreachInformation'

export default function Home() {
  return (
    <MainLayout>
      <div>
        <BreachInformation/>
      </div>
    </MainLayout>
  )
}
