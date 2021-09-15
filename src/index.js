import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
         author="Sam"
         timeAgo="Today at 4:45PM"
         commentText="Alto comment papá"
         avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
         author="Alex"
         timeAgo="Today at 2:25PM"
         commentText="PEQL"
         avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
         author="Jane"
         timeAgo="Yesterday at 1:45PM"
         commentText="what's uuuuuuup?"
         avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
