import { BestBusiness } from "@/components/BestBusiness";
import { CounterData } from '@/components/CounterData';
import { FirstBlock } from '@/components/FirstBlock';
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { PaymentsMethods } from "@/components/PaymentsMethods";

export default function Home() {
  return (
    <>
      <Header/>
      <FirstBlock/>
      <CounterData/>
      <p>From Home Components</p>
    </>
  )
}
