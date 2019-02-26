import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useResources from './useResources';



const ResourceList = ({ resource }) => {

  const resources = useResources(resource);


  return (
    <div className="ui bulleted list">
      {resources.map(record => {
        return (<div key={record.id} className="item">{record.title}</div>)
      })}
    </div>
  )
}

export default ResourceList
