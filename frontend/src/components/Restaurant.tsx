import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Blurhash } from 'react-blurhash';

import { RestaurantType } from '../types';

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
  body: {
    height: 70,
    paddingTop: 5,
    paddingBottom: 10,
  },
  onlineBody: {
    marginBottom: 5,
  },
  onlineIcon: {
    height: 12,
    width: 12,
    backgroundColor: 'green',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: 4
  },
  offlineIcon: {
    height: 12,
    width: 12,
    backgroundColor: 'red',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: 4
  },
});

interface Props {
  list: RestaurantType;
}

const Restaurant: React.FC<Props> = ({ list }: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <Blurhash hash={list.blurhash} width={450}/>
          <CardContent className={classes.body}>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.onlineBody}>
              {list.online
                ? <span className={classes.onlineIcon}></span>
                : <span className={classes.offlineIcon}></span>}
              {list.online? 'online': 'offline'}
            </Typography>
            <Typography gutterBottom variant="body1" component="h3">
              {list.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Restaurant;