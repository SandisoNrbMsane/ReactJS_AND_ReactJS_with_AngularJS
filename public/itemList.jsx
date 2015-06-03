

var Itemlist = React.createClass({ //declaration of component variable should always starts with capital letter
    propTypes: {
        data: React.PropTypes.string.isRequired

    },
    getInitialState: function() {
        return {
            selectedItems: [] //this is how the state is defined.always access it by this.state.your_state_name
        };
    },
    /*getDefaultProps: function() {
        return {
            data: 'your default values for prop'
        };
    },*/
    selectItems: function(e) {
        var index=this.state.selectedItems.indexOf(e);
        if(index>-1) {
            this.state.selectedItems.splice(index,1);
        }
        else {
            this.state.selectedItems.push(e);
        }

        this.setState({ //without this component will not render again to reflect changes
            selectedItems:  this.state.selectedItems
        });
    },
    render: function() {
        console.log("Parent component called");
       var clickfunc=this.props.data.ctrlFunc;
        var selectItems=this.selectItems;

        var products = this.props.data.mydata.map(function(product) {

            return (
                <li key={product.id}>
                    <Item data={product} clickfunc={clickfunc} selectitem={selectItems} />
                </li>
            )
        });

        return (
            //elements wrapping is must here. If we left any floating tag without semantic wrapping it will trough error
           /* eg: <h3>select  item  </h3> //we need to wrap this in span or div etc to get it worked.
        <ul >
        {products}
        </ul>*/
            <span>
            <h3><div className="panel headerItem">selected  item :{ this.state.selectedItems.length>0?this.state.selectedItems.join(', '):"No Items yet" }</div></h3>

            <ul >
                {products}
            </ul>
                </span>


        );
    }
});


