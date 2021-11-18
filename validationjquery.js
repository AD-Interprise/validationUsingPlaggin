$(document).ready(function ()
	{
		$("#form1").validate(
		{
		  rules: {

		  		first_name:"required",
		  		last_name:"required",

		  		user_name:{
		  			required:true,
		  			minlength:2
		  		},
		  		email:{
		  			required : true,
		  			email:true
		  		},
		  		password:{
		  			required:true,
		  			minlength: 5
		  		},
		  		con_password:{
		  			required:true,
		  			minlength:5,
		  			equalTo:"#password"
		  		}

		  },
		 messages: {

		  		first_name:"This field is required",

		  		last_name:"This field is required",

		  		user_name:{
		  			required :"This field is required",
		  			minlength:"Minimum length required is 2"
		  		},
		  		email:{
		  			required : "This field is required",
		  			email:"Please enter a valid email"
		  		},
		  		password:{
		  			required:"This field is required",
		  			minlength: "Minimum length required is 5"
		  		},
		  		con_password:{
		  			required:"This field is required",
		  			minlength:"Minimum length required is 5",
		  			equalTo:"Please enter same password as above"
		  		}
		  }

		});

	}
);