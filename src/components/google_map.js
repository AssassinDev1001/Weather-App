import React,{Component} from 'react';

export default class GoogleMap extends Component{
   componentDidMount(){                            //this is a lifecycle method  
        new google.maps.Map(this.refs.map,{       //which is called right after
        zoom:12,                                    //this component has been
        center:{                                    //rendered to the screen.
            lat:this.props.lat,
            lng:this.props.lon 
        }
       });
   }
   
    render(){
        return <div ref="map" />
    }
}