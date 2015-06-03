
var Item=React.createClass({  //declaration of component variable should always starts with capital letter

    propTypes: {
        //can put the constraint and type for property
        clickfunc:React.PropTypes.func  ,
        selectitem:React.PropTypes.func

    },
    getInitialState: function() {
        return {
            status: "Free"
        };
    },
    changeStatus: function(e) {
        this.props.clickfunc();//Calling parent controller function which calls angulas
        // controller fuction declare on config object
        this.props.selectitem(this.props.data.name);//Calling parent component function
        if(this.state.status==="Free") {

            this.state.status="Freeze";
        }
        else {
            this.state.status="Free";
        }

        this.setState({ //without this component will not render again to reflect changes
            status:  this.state.status
        });
    },


    render:function(){
        console.log("Child component called");
        var data=this.props.data;
      //  data.image='../'+data.image;//great mistake  to modify prop here.so always modify object outside before passing it to
        // parent component.
        return(
            <div className="thumbnail">

           <img src={data.image}  />

           <h3>{data.name}</h3>

          <div className={this.state.status==="Free"?"status1":"status2"}>I am {this.state.status}</div>

          <button className= 'btn-primary' onClick={ this.changeStatus}>
              Change my state
         </button>

          </div>
        )

    }
});