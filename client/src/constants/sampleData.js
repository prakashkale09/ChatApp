import { TrainRounded } from "@mui/icons-material";

export const samplechats=[{
    avatar:["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Doe",
    _id: "1",
    groupChat:false,members:["1","2"],
},{
avatar:["https://www.w3schools.com/howto/img_avatar.png"],
name:"John Boi",
_id: "2",
groupChat:true,
members:["1","2"],
},
{
    avatar:["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Boi",
    _id: "3",
    groupChat:true,
    members:["1","2"],
    },
    {
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        name:"John Boi",
        _id: "4",
        groupChat:true,
        members:["1","2"],
        },
        {
            avatar:["https://www.w3schools.com/howto/img_avatar.png"],
            name:"John Boi",
            _id: "5",
            groupChat:true,
            members:["1","2"],
            },
            {
                avatar:["https://www.w3schools.com/howto/img_avatar.png"],
                name:"John Boi",
                _id: "6",
                groupChat:true,
                members:["1","2"],
                },
];

export const sampleUsers=
[{
    avatar:["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Doe",
    _id: "1",
},
{
    avatar:["https://www.w3schools.com/howto/img_avatar.png"],
    name:"John Boi",
    _id: "2", 
    }
]

export const sampleNotifications=[
    {
        sender:{  avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        name:"John Doe",},
          _id: "1",
      },
          {
             sender:{
              avatar:["https://www.w3schools.com/howto/img_avatar.png"],
              name:"John Boi"
             },
              _id: "2", 
              }
]

export const sampleMessage=[{
      attachments: [],
      
      content:"zal ka jevan?",
      id:  " ab",
      sender:{
        _id:"user._id",
        name:"Prakash"
      },
      chat:"chatId",
      createdAt: "2024-02-12T10:41:30.630Z",

},
{
    attachments: [
        {
            public_id:"lol 2",
            url:       "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "",
      id:  " avx2",
      sender:{
        _id:"123",
        name:"Prakash2"
      },
      chat:"chatId",
      createdAt: "2024-02-12T10:41:30.630Z",
}]

export const dashboardData={
    users:[
        {
            name:"John Doe",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            _id:"1",
            username:"john_doe",
            friends:20,
            groups:5,
        },
        {
            name:"John Boi",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            _id:"2",
            username:"john_doe",
            friends:23,
            groups:9,
        },
    ],
    chats:[{
        name:"Tiger Group",
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        _id:"1",
        groupChat:false,
        members:[{_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},{_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
        totalMembers:2,
        totalMessages:20,
        creator:{
            name:"John Doe",
            avatar:["https://www.w3schools.com/howto/img_avatar.png"]
        }

    },{
        name:"Lion Group",
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        _id:"2",
        groupChat:true,
        members:[{_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"},{_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
        totalMembers:5, 
        totalMessages:20,
        creator:{
            name:"John Boi",
            avatar:"https://www.w3schools.com/howto/img_avatar.png"
        }

    }],
    messages:[
        {
            attachments:[],
            content:"Jevan zal ka",
            _id:'abc',
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Prakash",
            },
            chat:"chatId",
            groupChat:false,
            createdAt:"2024-02-12T10:41:30.630Z"

        },
        {
            attachments:[
                {
                    public_id:"234",
                    url:"https://www.w3schools.com/howto/img_avatar.png"
                }
            ],
            content:"",
            _id:'ab',
            sender:{
                avatar:"https://www.w3schools.com/howto/img_avatar.png",
                name:"Prakash2",
            },
            chat:"chatId",
            groupChat:true,
            createdAt:"2024-02-12T10:41:30.630Z"
        }
    ]
}