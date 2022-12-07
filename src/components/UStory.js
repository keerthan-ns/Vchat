import React from 'react';
import ReactInstaStories from 'react-insta-stories';


function UStory() {
  return (
    <ReactInstaStories
      stories={stories}
      defaultInterval={2000}
      width={360}
      height={740}
      style={{margin : 'auto 0'}}
    />
  );
}

export default UStory;


const stories = [
  {
    url: 'https://picsum.photos/1080/1920',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 5h ago',
      // profileImage: 'https://picsum.photos/1000/1000'
    }
  },
  {
    url:
      'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 32m ago',
    //   profileImage: 'https://picsum.photos/1080/1920'
    }
  },
  {
    url:
      'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'mohitk05/react-insta-stories',
      subheading: 'Posted 32m ago',
    //   profileImage:'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
    }
  },
  {
    url: 'https://picsum.photos/1080/1920',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 5h ago',
    //   profileImage: 'https://picsum.photos/1000/1000'
    }
  },
  {
    url:
      'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',
    header: {
      heading: 'Mohit Karekar',
      subheading: 'Posted 32m ago',
    //   profileImage: 'https://picsum.photos/1080/1920'
    }
  },
  {
    url:
      'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg',
    header: {
      heading: 'mohitk05/react-insta-stories',
      subheading: 'Posted 32m ago',
    //   profileImage:'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4'
    }
  }
];
