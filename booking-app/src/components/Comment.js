
import React, {Component} from "react";
import moment from 'moment'
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/styles";
import Rating from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const moodColor = {
    'negative': '#F11A4E',
    'neutral':  '#A09D9D',
    'positive': '#1EE56E'
};


const commentStyles = () => ({
    cover: {
        width: 150,
    },
    more: {},
    avatar: {
        width:          '100px',
        height:         '100px',
        color:          'white',
        position: 'inherit',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 15,
        width: '100%',
        color: '#565454',
    },
    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-between',
        marginLeft: 20,
        lineHeight: 1.5,
        width: '100%',
        color: '#565454',
    },
    mainInfo:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        color: '#565454',
        ' & > *': {
            fontSize: 16,
            fontFamily: 'Montserrat',
            color: '#565454',
        },
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
    },
    mood: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    name: {
        fontSize: 25,
        fontFamily: 'Montserrat',
        color: '#565454',
    }

});


const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

class Comment extends Component {

    constructor(props) {
        super(props);
    }

    getMoodType = () => {
        const { comment: { moodType } } = this.props;
        if (moodType.toString() === 'positive') return 5;
        if (moodType.toString() === 'negative') return 1;
        if (moodType.toString() === 'neutral') return 3;
    };
    render() {
        const { classes, comment } = this.props;
        const { id, text, createdDate, moodType, author: { firstName, lastName } } = comment;

         return (
        <Card className = { classes.card }>
                <Avatar
                    className = { classes.avatar }
                    src = 'public/images/avatar-person.jpeg' />
                <Box className = { classes.infoBox }>
                    <Box className = {classes.mainInfo}>
                        <Box className = { classes.info }>
                            <div className={ classes.name }>{firstName} {lastName}</div>
                            <div format="YYYY/MM/DD">{moment(new Date(createdDate.toString())).format("YYYY-MM-DD hh:mm:ss")}</div>
                        </Box>
                        <Box className = { classes.mood }>
                            <Rating
                                name="customized-icons"
                                defaultValue={this.getMoodType()}
                                getLabelText={value => customIcons[value].label}
                                IconContainerComponent={IconContainer}
                                readOnly
                            />
                            <div style = {{color: moodColor[moodType]}}>{moodType}</div>
                        </Box>
                    </Box>
                    <Box className = { classes.description }>{text}</Box>
                </Box>
        </Card>
    )
    }
}


export default withStyles(commentStyles)(Comment);
