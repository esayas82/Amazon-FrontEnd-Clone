import React from 'react';
import { categoryInfos } from './CatagoryFullinfos';
import CatagoryCard from './CatagoryCard';
import classes from './Catagory.module.css'

function Catagory() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CatagoryCard key={infos.name} data={infos} />
        
      ))}
    

    </section>
  );
}

export default Catagory;

