import React from "react";
const pics = [
  "https://cdn.pixabay.com/photo/2017/06/19/07/12/water-lily-2418339__480.jpg",
  "https://cdn.pixabay.com/photo/2017/07/18/18/24/dove-2516641__480.jpg",
  "https://cdn.pixabay.com/photo/2017/07/14/17/44/frog-2504507__480.jpg",
  "https://cdn.pixabay.com/photo/2016/09/04/13/08/bread-1643951__480.jpg",
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/2/images/1.png",
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/4/images/2.png",
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/0/images/2.png",
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/1/images/3.png",
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/5/images/1.png",
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/5/images/4.png",
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/5/images/10.png",
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/5/images/12.png",
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/5/images/11.png",
      ],
      selectedImage:
        "https://nfts-media.mongolnft.xyz/mnft_wolves/0/2/images/1.png",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => {
        if (prevState.selectedImage === this.state.images[0]) {
          return {
            selectedImage: this.state.images[1],
          };
        } else {
          return {
            selectedImage: this.state.images[0],
          };
        }
      });
    }, 500);
  }

  render() {
    return (
      <div className="my-10">
        <img
          className="m-2 rounded-lg h-96 m-auto"
          src={this.state.selectedImage}
        />
        {/* <img src={this.state.selectedImage } /> */}
      </div>
    );
  }
}
export default App;
