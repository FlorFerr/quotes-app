import React from 'react'
import QuotesList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {id: 'q1', author: 'FF', text: 'Learn React'},
  {id: 'q2', author: 'Flor', text: 'Learn more React'}
]
const AllQuotes = () => {
  return (
    <>
      <h1>AllQuotes page</h1>
      <QuotesList quotes={DUMMY_QUOTES}/>
    </>
  )
}

export default AllQuotes