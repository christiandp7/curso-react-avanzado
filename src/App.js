import React from 'react'
import { Category } from './components/Category'
import { ListOfCategories } from './components/ListOfCategories'
import { PhotoCard } from './components/PhotoCard'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyles } from './styles/GlobalStyles'

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  )
}

export default App
