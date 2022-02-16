import React from 'react';
import './board.css';
import List from './list'


const Info = [
    {
       
        name : "farhan ibne saif", birthday : "2009-11-12"
    },
    {
      
        name : "farhana easmin ", birthday : "1982-01-31"
    },
    {
      
        name : "rokey begum", birthday : "1947-02-14"
    },
    {
        
        name : "saiful alam", birthday : "1972-09-18"
    },
    {
     
        name : "sazzat parvez", birthday : "1991-12-13"
    },
    {
     
        name : "sadat parvez", birthday : "2002-02-17"
    },
    {
      
        name : "shahana parven", birthday : "1971-04-01"
    },
    {
       
          name : "mursalin binte monnaf", birthday : "1994-08-26"
    },
    {
       
          name : "tasneem akter tonni", birthday : "1999-03-01"
    },
    {
        
          name : "naznin akter nitu", birthday : "2002-03-26"
    },
    {
        
          name : "jesmin akter", birthday : "1974-01-01"
    },
    {
       
          name : "arif billal ", birthday : "1997-09-24"
    },
    {
       
          name : "jaheda sultana tripti", birthday : "2004-09-24"
    },
  ]

export default function board() {
  return (
      <main id='site-main'>
          <h1 className="text-dark title" style={{color:'azure'}}>Birthday Remainder</h1>

          <div className="board">
                <List info={Today(Info)}></List>
                <h2 className='upcoming text-dark' style={{color:'azure'}}>Upcoming</h2>
                <List info={Upcoming(Info , 2)} upcoming={true}></List>
          </div>
      </main>
  );
}

function Today(person){
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay == day && currentMonth == month;
    })
    return filter;
}


// upcoming birthdays
function Upcoming(person, toMonth){
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter =person.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();

        if (currentDay == day) return;
        return month >= currentMonth && month <= currentMonth + toMonth;
    })

    return filter;

}

