import React, { useEffect, useState } from 'react'
import { Item } from './Item'
import styled from 'styled-components'
import Divider from '../Divider'
import json from '../../assets/data.json'

const MenuContainer = styled.div`
  left: 0%;
  top: 0%;

  /* STD W */

  background: #ffffff;
  /* Primary30 */

  border: 1px solid #d1e3f8;
  /* Depth10 */

  box-shadow: 0px 4px 12px rgba(107, 133, 163, 0.06),
    0px 4px 16px rgba(50, 132, 225, 0.16);
  border-radius: 4px;

  width: max-content;
  height: max-content;

  margin: auto;

  padding: 7px 0 7px 0;

  .filter {
    font-size: 14px;
    line-height: 20px;
    color: #8299b6;
    width: 100%;
    height: 49px;
    padding-left: 21px;
  }
`

const Menu = () => {
  const [filter, setFilter] = useState(true)
  function handleFilterChange(_filter: any) {
    setFilter(_filter.target.checked)
  }

  const [type, setType] = useState('people')
  function handleTypeChange(_type: any) {
    setType(_type.target.value)
  }

  const [filteredContent, setFilteredContent] = useState('')
  function filterContent(ev: any) {
    console.log(filteredContent)
    setFilteredContent(ev.target.value)
  }

  const [data, setData] = useState([])
  useEffect(() => {
    let filteredData = [] as any
    filteredData = json.filter((d: any) => d.type === type)
    filteredData = filteredData
      .filter((element: any) =>
        element.elements.some((subElement: any) =>
          subElement.title.includes(filteredContent)
        )
      )
      .map((element: any) => {
        const newElt = Object.assign({}, element) // copies element
        return newElt.elements.filter((subElement: any) =>
          subElement.title.includes(filteredContent)
        )
      })
    // filteredData.elements = filteredData.elements.filter((d: any) =>
    //   d.title.includes(filteredContent)
    // )
    setData(filteredData[0])
  }, [filter, type, filteredContent])

  return (
    <>
      <p>Show Filter</p>
      <input
        type="checkbox"
        id="filter"
        name="filter"
        onChange={handleFilterChange}
        checked={filter}
      />
      <Divider />
      <label>
        <input
          type="radio"
          id="subjects"
          name="type"
          value="subjects"
          onChange={handleTypeChange}
          checked={type === 'subjects'}
        />
        Subjects
      </label>
      <label>
        <input
          type="radio"
          id="people"
          name="type"
          value="people"
          onChange={handleTypeChange}
          checked={type === 'people'}
        />
        People
      </label>
      <Divider />
      <MenuContainer>
        {filter && (
          <>
            <input
              className="filter"
              type="text"
              placeholder="Filter by name"
              onChange={filterContent}
            />
            <Divider />
          </>
        )}
        {data.map((item, index) => (
          <Item item={item} key={`item-${index}`} />
        ))}
      </MenuContainer>
    </>
  )
}

export { Menu }
