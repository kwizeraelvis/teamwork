class MyArticleFeed{
    constructor(){
        this.articleFeed = [
            {
                title: "How to avoid overworking",
                article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Asperiores reprehenderit animi natus ipsa exercitationem officia",
                createdOn: new Date().getDate(),
                createBy: 'Kwizera Aime Elvis'
            },
            {
                title: "Es6 Classes reintroduced",
                article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Asperiores reprehenderit animi natus ipsa exercitationem officia",
                createdOn: new Date().getDate(),
                createBy: 'Kwizera Aime Elvis'
            },
            {
                title: "How to avoid overworking",
                article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Asperiores reprehenderit animi natus ipsa exercitationem officia",
                createdOn: new Date().getDate(),
                createBy: 'Kwizera Aime Elvis'
            }
        ];
    }
        getFeedLength () {
            return this.articleFeed.length;
        }
        getArticleFeed(){
            return this.articleFeed;
        }
        addNewArticletoFeed(article){
            this.articleFeed.push(article);
        }
    }
class MainArticleFeed {
    constructor(){
        this.feed = [
            {
                title: "How to avoid overworking",
                article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Asperiores reprehenderit animi natus ipsa exercitationem officia",
                createdOn: new Date().getDate(),
                createBy: 'Kwizera Aime Elvis'
            },
            {
                title: "Es6 Classes reintroduced",
                article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Asperiores reprehenderit animi natus ipsa exercitationem officia",
                createdOn: new Date().getDate(),
                createBy: 'Kwizera Aime Elvis'
            },
            {
                title: "How to avoid overworking",
                article: "Lorem ipsum dolor sit amet consectetur, adipisicing elit Asperiores reprehenderit animi natus ipsa exercitationem officia",
                createdOn: new Date().getDate(),
                createBy: 'Kwizera Aime Elvis'
            }
        ];
    }
        getFeedLength(){
            return this.feed.length;
        }
        getFeed(){
            return this.feed;
        }
        addtoFeed(article){
            this.feed.push(article);
        }
}

const creatInboxIndividualRow = (tbody,position,data) => {
    //create tr element and then add some class
       var tr = document.createElement('tr');
       tr.classList.add('g-t-tr');
       if(position % 2 != 0 ){tr.classList.add('tr-backgound')};         
              //create td elements and then add some class
               var td_check = document.createElement('td');
               var td_check_classes=['g-t-td','check'];
               td_check.classList.add(td_check_classes);
               td_check.setAttribute("width","5%")
                       //create label element inside td
                       var label = document.createElement('label');
                       label.classList.add('chk_unchk_icon');
                               //create input element inside label
                               var input = document.createElement('input');
                               input.setAttribute("type", "checkbox");
                               //create span element inside label
                               var span = document.createElement('span')
                               span.classList.add('checkmark');
                        //append input element and span element to label	   
                        label.appendChild(input);
                        label.appendChild(span);
                //append label element to td_check			   
                td_check.appendChild(label);
        //then appen td_check element to tr
        tr.appendChild(td_check);     
                var td_name = document.createElement('td');
                td_name.classList.add('g-t-td');
                td_name.classList.add('name');
                td_name.setAttribute("onclick","openReadArticle('../../UI/html/inbox_read_mail.html')");
                var name= document.createTextNode(data.subject);
                td_name.appendChild(name);
        //then append td_name to tr element        
        tr.appendChild(td_name);
                var td_message = document.createElement('td');
                td_message.classList.add('g-t-td');
                td_message.classList.add('feed');
                var message = document.createTextNode(data.message);
                td_message.appendChild(message);
        //then append td_message to tr element
        tr.appendChild(td_message);  
                var td_date = document.createElement('td');
                td_date.classList.add('g-t-td');
                td_date.classList.add('date');
                var date = document.createTextNode(data.createdOn);
                td_date.appendChild(date);
        tr.appendChild(td_date);                      
       //Then append tr to tbody
       tbody.appendChild(tr);
}