import React from 'react'
import MyInput from './UI/input/MyInput'
import Myselect from './UI/select/Myselect'

function PostFilter({filter, setFilter}) {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e =>setFilter({...filter, query: e.target.value})}
        placeholder='search...'
      />
      <Myselect
          defaultValue='Sort'
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={[
            {value: 'title', name: 'by name'},
            {value: 'body', name: 'by description'}
          ]}
        />
     </div>
  )
}

export default PostFilter