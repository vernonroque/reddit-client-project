

export const CommentItem = (props) => {

    const {comment } = props;

    return (
        <>
            <div className = 'comment_space'>

                {(comment) ? <p className='actual_comment'>{comment}</p>:''}
    
            </div>
        </>

    )
}