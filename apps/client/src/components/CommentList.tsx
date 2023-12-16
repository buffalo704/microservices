export interface Comment {
    id: string;
    content: string;
    status: string;
}

export interface CommentListProps {
    comments: Comment[];
}

export const CommentList = ({comments}:CommentListProps) => {

  const commentItems = comments.map((comment: Comment) => {

    let content;
    switch(comment.status) {  
      case 'approved':
        content = comment.content;
        break;
      case 'pending':
        content = 'This comment is awaiting moderation';
        break;
      case 'rejected':
        content = 'This comment has been rejected';
        break;
      default:
        content = 'This comment is awaiting moderation';
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{commentItems}</ul>;
};
