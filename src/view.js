import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Table } from 'antd';
import 'antd/dist/antd.css';

import Edit from './Edit'

class View extends Component {
  state = {
    isOpen: false,
    id: '',
  }

  onClose = () => {
    this.setState({ isOpen: false })
  }

  onOpen = () => {
    this.setState({ isOpen: true, id: this.props.id })
  }

  render() {
    const { isOpen, id } = this.state
    const { data, deleteRow, updateRow, getUserById } = this.props

    return (
      <div>
        <Edit
          onClose={this.onClose}
          isOpen={isOpen}
          id={id}
          updateRow={updateRow}
          getUserById={getUserById}
        />
      <Table columns={columns} dataSource={data} onChange={onChange}></Table>
      </div>
    )
  }
}

export default View
