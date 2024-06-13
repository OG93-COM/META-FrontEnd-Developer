
import CallToActionBtn from '../components/CallToActionBtn'
import Special from '../components/Special'

const Main = () => {

  return (
    <main className='mt-14'>
        <div className='flex justify-center items-center'>
            <h1 className='font-semiblod text-3xl mx-auto'>Special</h1>
            <CallToActionBtn textBtn="Online Menu"/>
        </div>
        <Special/>
    </main>
  )
}

export default Main