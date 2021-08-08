import React, {useState, useEffect } from 'react'
import {Category} from '../Category';
import { List, Item } from './styles'
import {categories as mockCategories} from '../../../api/db.json';

const API = 'http://localhost:3500'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(API + '/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
}