import * as React from 'react'
import {Button} from "./button";
import styled from "styled-components";
import {Typography} from "./typography";

const ListStyled = styled.ul`
  list-style: none;
  padding: 2rem;
  flex-direction: column;


`;


const ListItemStyle = styled.li`
  div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  margin: 1rem;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 139, 0.26);
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex: 1;
`;

export interface Field {
  header: string;
  property: string;
}

export interface ActionField {
  label: string;
  handler: (data: any) => void;
}

export interface ListProps {
  fields: Field[];
  actions?: ActionField[];
  data: any[];
}

export const List: React.FC<ListProps> = ({fields, data, actions}) => {

  if (!data || data.length === 0) {
    return <h3>No records</h3>
  }

  return (
    <ListStyled>
      {data.map(item => <ListItemStyle>
        {
          fields.map(c => <div key={c.header}>
            <Typography text={c.header}/>
            <Typography text={item[c.property]}/>
          </div>)
        }
        {
          actions?.map(c => <Button key={c.label} label={c.label} onClick={() => c.handler(item)}></Button>)
        }
      </ListItemStyle>)}
    </ListStyled>

  )
}
