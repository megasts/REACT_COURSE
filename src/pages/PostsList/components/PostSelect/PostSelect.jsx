import React from "react";

const PostSelect = (props) => {
    const {options, updateSorting, activeSorting} = props;
    return (
        <select
            value={activeSorting}
            oneChange = {(e) => updateSorting(e.target.value)}
        >
            <option disabled value="">
                Выберите из спискаю...
            </option>
            {
                //[{name: По заголовку, value: 'title'}]
                options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))
            }
        </select>
    );
};

export default PostSelect;