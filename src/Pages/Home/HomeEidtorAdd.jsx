import React from 'react';
import { useSelector } from 'react-redux';
import HomeCommentAdd from './HomeCommentAdd';
import HomeCommentEdit from './HomeCommentEdit';


const HomeEidtorAdd = () => {
    const {ifEdit } = useSelector( state => state.popupHome)
    return (
        <div>
            {
                ifEdit ? <HomeCommentEdit/> : <HomeCommentAdd />
            }
        </div>
    );
};

export default HomeEidtorAdd;