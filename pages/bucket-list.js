import React from 'react';
import cn from 'classnames';
import { Suspense } from 'react';
import Container from '../components/Container';

const Card = ({title, gradient = "from-[#888888] to-[#888888]", onClick}) => (
    
    <a
    className={cn(
      'transform hover:scale-[1.01] transition-all',
      'rounded-xl w-full lg:w-1/3 bg-gradient-to-r p-1',
      gradient
    )}
    onClick={onClick}
  >
    <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4" style={{height: 60, width: 150}}>
      <div className="flex flex-col lg:flex-row justify-between">
        <h4 className="text-lg lg:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight" style={{textAlign: 'center'}}>
          {title}
        </h4>
      </div>
      <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
</div></div>
      </a>
)

const hashMap = {
  "yearly-goals":[
     {
        "title":"Get Fluent in dutch",
        "checked":false
     },
     {
        "title":"Run a marathon",
        "checked":true
     },
     {
      "title":"Learn Chess at intermediate level",
      "checked":false
   },
   {
    "title":"Run sub3 marathon",
    "checked":false
 },
 {
  "title":"Run sub 1:25 Half marathon",
  "checked":false
},
{
  "title":"Become a good cook",
  "checked":false
},
{
  "title":"Follow skin care routine regularly ",
  "checked":false
},
{
  "title":"Gym regularly",
  "checked":false
},
{
  "title":"run 3200km in 1 year",
  "checked":false
},
{
  "title":"Bike 100km non stop",
  "checked":false
},
{
  "title":"",
  "checked":false
},

],
  "countries":[
    {
      "title":"Denmark",
      "checked":false
    },
    {
      "title":"Germany",
      "checked":false
    },
    {
      "title":"UK",
      "checked":false
    },
    
     {
        "title":"Netherlands",
        "checked":true
     },
     {
        "title":"France",
        "checked":true
     },
     {
        "title":"Austria",
        "checked":true
     },
     {
      "title":"Portugal",
      "checked":true
   },
   {
    "title":"Italy",
    "checked":true
 },

],
  "events":[
     {
        "title":"Attend Porcupine Tree concert",
        "checked":true
     },
     {
      "title":"Run Rotterdam Marathon",
      "checked":true
   },
   {
    "title":"Attend Harry styles concert",
    "checked":false
 },
 
  ]
}
const BucketList = () => {
  const [currentTab, setTab] = React.useState('yearly-goals');
    return (
        <Suspense fallback={null}>
        <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto w-full mb-8">

        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Bucket List
        </h1>
        
                      <div className="flex gap-6 flex-row lg:flex-row">     
                      <Card title={'Yearly Goals'}  onClick={() => setTab('yearly-goals')}/>
                      <Card title={'Countries'} onClick={() => setTab('countries')}/>
                      {/* <Card title={'Races'}  onClick={() => setTab('races')}/> */}
                      <Card title={'Events'}  onClick={() => setTab('events')}/>

                       
</div>
<div>
      {hashMap[currentTab].map((item, index) => (
        <div key={index} className="flex flex-row items-baseline border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8">
        <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
        {index+1}
        </p>
        <div className="flex flex-col pl-3">
          <a
            className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
          >
            {item.checked ?  <s>{item.title}</s> : item.title}
          </a>
        </div>
      </div>
      ))}
</div>
</div>
        </Container>
        </Suspense>
    )
}

export default BucketList;