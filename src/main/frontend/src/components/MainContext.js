import React, {useEffect, useState} from "react";
import {
    Box,
    Card,
    Heading,
    CardBody,
    Grid,
    Grommet,
    Image,
    CardFooter,
    Paragraph,
    Collapsible,
    Anchor,
    Button
} from 'grommet';
import {FormDown, FormUp, Favorite} from 'grommet-icons';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { getBooks } from '../services/BookService.js';


const theme = {
    global: {
        font: {
            family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
        },
    },
    card: {
        elevation: 'none',
        background: 'light-2',
        footer: {
            pad: 'small',
        },
    },
};

export default function MainComponent() {

    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [favorite, setFavorite] = React.useState(false);

    useEffect(() => {
        getBooks()
            .then((result) => setData(result));
    }, [])


    // useEffect(() => {
    //     fetch('api/books')
    //         .then((response) => response.json())
    //             .then((data) => setData(data));
    // }, []);
        const ExpandButton = ({...rest}) => {
            const Icon = open ? FormUp : FormDown;
            return (
                <Button
                    hoverIndicator="light-4"
                    icon={<Icon color="brand"/>}
                    {...rest}
                />
            );
        };

        return (
            <Grommet theme={theme}>
                <Box pad="small">
                    <Grid
                        gap="small"
                        rows="medium"
                        columns={{count: 'fit', size: ['small', 'small']}}
                    >
                        {data.map(book => (
                            <Card elevation="medium" width="medium" key={book.id}>
                                <CardBody height="medium">
                                    <Image
                                        fit="contain"
                                        src={book.link}
                                        a11yTitle={book.title}
                                    />
                                </CardBody>
                                <Box pad={{horizontal: 'medium'}} responsive={false}>
                                    <Heading level="4" margin={{vertical: 'medium'}}>
                                        {book.title}
                                    </Heading>
                                    <Paragraph margin={{top: 'none'}}>
                                        {book.year}
                                    </Paragraph>
                                </Box>
                                <CardFooter>
                                    <Box direction="row" align="center" gap="small">
                                        <Button
                                                icon={<Favorite color={favorite ? 'red' : undefined} />}
                                                hoverIndicator
                                                onClick={() => {
                                                    setFavorite(!favorite);
                                                }}
                                        />
                                        <Anchor
                                            href="#"
                                            label="Узнать больше"
                                        />
                                    </Box>
                                    <ExpandButton onClick={() => setOpen(!open)} />
                                </CardFooter>
                                <Collapsible open={open}>
                                    <Paragraph margin="small" color="dark-3">
                                        {book.review}
                                    </Paragraph>
                                </Collapsible>
                                <ButtonGroup direction="row" align="center" gap="small">
                                    <Button size="small" color="green" align ="center" >Edit</Button>
                                    <Button size="small" color="red" align ="center">Delete</Button>
                                </ButtonGroup>
                            </Card>
                        ))}
                    </Grid>
                </Box>
            </Grommet>
        )
    }
