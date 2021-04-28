import React from 'react';
import styled from 'styled-components';

import { ArrowDropDown } from '@material-ui/icons';

const Main = () => (
  <Container>
    <StatusBar>Status</StatusBar>
    <IssueTable />
  </Container>
);

const Container = styled.main`
  flex-grow: 2;
`;

const StatusBar = styled.div`
  height: 40px;
  width: 100%;
  background: ${props => props.theme.gray2};
`;

const IssueTable = () => (
  <Table>
    <colgroup>
      <col className="checkbox" />
      <col className="star" />
      <col className="priority" />
      <col className="id" />
      <col className="type" />
      <col className="title" />
      <col className="project" />
      <col className="assignee" />
      <col className="modified" />
    </colgroup>
    <THead>
      <tr>
        <th>
          <Checkbox />
        </th>
        <th></th>
        <th>
          <div>
            <span>P</span>
            <ArrowDropDown />
          </div>
        </th>
        <th>
          <div>
            <span>ID</span>
            <ArrowDropDown />
          </div>
        </th>
        <th>
          <div>
            <span>TYPE</span>
            <ArrowDropDown />
          </div>
        </th>
        <th>
          <div>
            <span>TITLE</span>
            <ArrowDropDown />
          </div>
        </th>
        <th>
          <div>
            <span>PROJECT</span>
            <ArrowDropDown />
          </div>
        </th>
        <th>
          <div>
            <span>ASSIGNEE</span>
            <ArrowDropDown />
          </div>
        </th>
        <th>
          <div>
            <span>MODIFIED</span>
            <ArrowDropDown />
          </div>
        </th>
      </tr>
    </THead>
    <tbody>
      <Issue>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
      </Issue>
    </tbody>
  </Table>
);

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  /* prettier-ignore */
  colgroup {
    & .checkbox { width: 36px; }
    & .star { width: 25px; }
    & .priority { width: 25px; }
    & .id { width: 64px; }
    & .type { width: 64px; }
    & .title { width: 50%; }
    & .project { width: 120px; }
    & .assignee { width: 120px; }
    & .modified { width: 120px; }
  }
`;

const THead = styled.thead`
  color: ${props => props.theme.gray1};
  border-bottom: 1px solid ${props => props.theme.gray3};
  font-size: 12px;
  font-weight: 700;
  text-align: left;

  > tr {
    height: 40px;
  }

  th > div {
    display: flex;
    align-items: center;
  }
`;

const Issue = styled.tr`
  height: 40px;

  > td {
    border-bottom: 1px solid ${props => props.theme.gray3};
    border-top: 1px solid ${props => props.theme.gray3};
  }
`;

const Checkbox = styled.div`
  height: 16px;
  width: 16px;
  border: 2px solid ${props => props.theme.gray1};
  border-radius: 2px;
`;

export default Main;
