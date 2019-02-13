import * as React from 'react'

export default function AddForm(props) {

  return (<div>
    <form onSubmit={props.onSubmit}>
      <label>
        Title:
          <input value={props.values.title} placeholder='Title' type="text" name="title" onChange={props.onChange} />
      </label>
      <label>
        Description:
          <input value={props.values.description} placeholder='Description' type="text" name="description" onChange={props.onChange} />
      </label>
      <input type="submit" value="Add" />
    </form>
  </div>)
}

