import React from 'react'
import { Route, useParams, Link } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import NoQuotesFound from '../components/quotes/NoQuotesFound'

const QuoteDetail = () => {

  const DUMMY_QUOTES = [
    {id: 'q1', author: 'FF', text: 'Learn React'},
    {id: 'q2', author: 'Flor', text: 'Learn more React'}
  ]

  const params = useParams()

  const quote = DUMMY_QUOTES.find( quote => quote.id === params.quotesId)

  if(!quote){
    return <NoQuotesFound></NoQuotesFound>
  }

  

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path ={`/quotes/${params.quotesId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`/quotes/${params.quotesId}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetail