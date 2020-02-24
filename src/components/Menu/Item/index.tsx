/* eslint-disable spaced-comment */
/// <reference types="../../../index" />

import React from 'react'
import styled from 'styled-components'
import * as images from '../../../images/*.png'

const ItemContainer = styled.div`
    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 50%;
    height: 40px

    flex: none;
    order: 0;
    align-self: center;
    margin: 0px 0px;
    
    display: flex;
    align-items: center;

    padding: 0 21px 0 21px;

    &:hover {
        background: #1E75D8;
        color: #FFFFFF;
        .subtitle {
            color: #D1E3F8;
        }
    }

    .images { 
        display: flex;
        margin: 0 8px 0 0;
        
        .product {
            position: absolute;
        }

        .person {
           margin-left: 14px;
           z-index: 1;
        }
    }

    .title {
        margin: 0 8px 0 0;
    }

    .subtitle {
        
        font-size: 12px;
        line-height: 18px;
        color: #60789A;

    }
`

const Item = (props: any) => {
  const { item } = props

  return (
    <ItemContainer>
      {item.imageUrl && (
        <p className="images">
          <img className="product" src={images['product']} />
          <img className="person" src={images[item.imageUrl]} />
        </p>
      )}
      <p className="title">{item.title}</p>
      {item.subtitle && <p className="subtitle">{item.subtitle}</p>}
    </ItemContainer>
  )
}

export { Item }
