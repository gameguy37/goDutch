export const getComments = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/bills/:bill_id/comments'
    });
};

export const getComment = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/bills/:bill_id/comments/${id}` //////////
    });
};

export const createComment = payload => {
    return $.ajax({
        method: 'POST',
        url: 'api/bills/:bill_id/comments',
        data: payload
    });
};

export const destroyComment = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/bills/:bill_id/comments/${id}`, /////////
    });
};