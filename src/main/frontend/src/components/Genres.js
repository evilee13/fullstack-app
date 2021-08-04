import React, {useEffect, useState} from 'react';

import {Grommet, Box} from 'grommet';
import {grommet} from 'grommet/themes';
import {CheckBox} from "@material-ui/icons";

export default function Genres() {
    const [checked, setChecked] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('api/genres')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);
    const onCheckAll = event => {
        if (event.target.checked) {
            setChecked(data);
        } else {
            setChecked([]);
        }
    };

    const onCheck = (event, value) => {
        if (event.target.checked) {
            setChecked([...checked, value]);
        } else {
            setChecked(checked.filter(item => item !== value));
        }
    };

    return (
        <Grommet theme={grommet}>
            <Box align="start" pad="small">
                <Box direction="row" gap="medium">
                    <CheckBox
                        checked={checked.length === data.length}
                        indeterminate={checked.length > 0 && checked.length < data.length}
                        label="All"
                        onChange={onCheckAll}
                    />
                    {data.map(item => (
                        <CheckBox
                            key={item}
                            checked={checked.includes(item.title)}
                            label={item}
                            onChange={e => onCheck(e, item.title)}
                        />
                    ))}
                </Box>
            </Box>
        </Grommet>
    );
};

