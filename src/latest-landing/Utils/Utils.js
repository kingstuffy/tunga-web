export const paging = (current, This) => {
    const { data, paginate, dataPerPage } = This.state;
    const { perPage } = paginate;
    console.log({ current, data, perPage, count: Math.ceil(data.length / perPage) });
    if (isNaN(current)) {
        This.setState({ paginate: {...paginate, transition: true } });
        return This.state.dataPerPage;
    }
    This.setState({ paginate: {current: current, perPage, transition: false } });
    if (current > Math.ceil(data.length / perPage)) {
        This.setState({ paginate: {current: current - 1 , perPage, transition: true} });
        return dataPerPage;
    }
    if (current <= 1 || isNaN(current)) {
        current = 1;
        setTimeout( () => This.setState({ paginate: {current: 1, perPage, transition: true } }), 300);
        return data.slice((current - 1) * perPage, (current) * perPage);
    }
    setTimeout( () => This.setState({ paginate: {current, perPage,  transition: true} }), 300);
    console.log((current - 1) * perPage, (current) * perPage);
    return  data.slice((current - 1) * perPage, (current) * perPage);
};
