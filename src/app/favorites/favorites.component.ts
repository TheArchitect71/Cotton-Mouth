import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor() { }

  favoritesList = [
    {
      id: 1,
      title: `Thinking Fast and Slow`,
      subtitle: `Book`,
      image: `https://images-na.ssl-images-amazon.com/images/I/51oXKWrcYYL.jpg`,
      alt: `Thinking Fast and Slow Book`,
      content: `Engaging the reader in a lively conversation about how we think,
      Kahneman reveals where we can and cannot trust our intuitions and how
      we can tap into the benefits of slow thinking. He offers practical and
      enlightening insights into how choices are made in both our business
      and our personal lives—and how we can use different techniques to
      guard against the mental glitches that often get us into trouble.`,
      link: `https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow`
    },
    {
      id: 1,
      title: `The God Delusion`,
      subtitle: `Book`,
      image: `https://images-na.ssl-images-amazon.com/images/I/41LMUsSTaNL._SX331_BO1,204,203,200_.jpg`,
      alt: `The God Delusion Book`,
      content: `A compelling case that belief in God is not just wrong but potentially
      deadly. It also offers exhilarating insight into the advantages of
      atheism to the individual and society, not the least of which is a
      clearer, truer appreciation of the universe's wonders than any faith
      could ever muster.`,
      link: ``
    },
    {
      id: 1,
      title: `A Briefer History of Time`,
      subtitle: `Book`,
      image: `https://i5.walmartimages.com/asr/52c45b07-a3d1-4099-ab45-18e552e8a837_1.109eefa6e534e4c64b2c2a79b8700d4d.jpeg`,
      alt: `A Briefer History of Time Book`,
      content: `Stephen Hawking’s worldwide bestseller A Brief History of Time remains
      a landmark volume in scientific writing. But for years readers have
      asked for a more accessible formulation of its key concepts—the nature
      of space and time, the role of God in creation, and the history and
      future of the universe.`,
      link: ``
    },
    {
      id: 1,
      title: `The Imitation Game`,
      subtitle: `Movie`,
      image: `https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/hztvcwg7zdfdfdojvdgk.jpg`,
      alt: `The Imitation Game Movie Poster`,
      content: `Is a 2014 American historical drama film based on the biography of
      Alan Turing, a British cryptanalyst, who decrypted German intelligence
      messages for the British government during the Second World War.`,
      link: ``
    },
    {
      id: 1,
      title: `The King's Speech`,
      subtitle: `Movie`,
      image: `https://goodmenproject.com/wp-content/uploads/2019/04/nkFTbA1XjKWo9LCTaV1hV2Lsgr1.jpg`,
      alt: `The King's Speech Movie Poster`,
      content: `Is a 2010 historical drama film about the future King George VI who,
      to cope with a stammer, sees Lionel Logue, an Australian speech and
      language therapist. The new king relies on Logue to help him make his
      first wartime radio broadcast on Britain's declaration of war on
      Germany in 1939.`,
      link: ``
    },
    {
      id: 1,
      title: `V for Vendetta`,
      subtitle: `Movie`,
      image: `https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/V_for_vendettax.jpg/220px-V_for_vendettax.jpg`,
      alt: `V for Vendetta Movie Poster`,
      content: `Is a 2006 dystopian political thriller film based on the 1988
      DC/Vertigo Comics limited series. Set in an alternative future where a
      Nordic supremacist and neo-fascist totalitarian regime has subjugated
      the United Kingdom`,
      link: ``
    },
    {
      id: 1,
      title: `The Patriot Act`,
      subtitle: `TV Show`,
      image: `https://m.media-amazon.com/images/M/MV5BZDUzZmIwYzMtMTNiNS00OTRlLTliYTgtZjljNjNjNTdkNDc4XkEyXkFqcGdeQXVyNjAxNDcwNzY@._V1_.jpg`,
      alt: `The Patriot Act Poster`,
      content: `Is an American comedy web television talk show that aims to "explore
      the modern cultural and political landscape with depth and sincerity."
      In an attempt to separate the show from similar political satire
      shows.`,
      link: ``
    },
    {
      id: 1,
      title: `Star Trek: The Next Generation`,
      subtitle: `TV Show`,
      image: `https://m.media-amazon.com/images/M/MV5BNDViYjAyZWUtNGQxMy00MDUyLTlkZTAtOWNkY2M5ZTk5MTE5XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg`,
      alt: `Star Trek: The Next Generation Poster`,
      content: `Is an American science fiction television series. A new generation of
      Starfleet officers set off in the U.S.S. Enterprise-D on their own
      mission to go where no one has gone before.`,
      link: ``
    },
    {
      id: 1,
      title: `Rick and Morty`,
      subtitle: `TV Show`,
      image: `https://imgc.allpostersimages.com/img/print/u-g-F9DGRL0.jpg?w=550&h=550&p=0`,
      alt: `Rick and Morty Poster`,
      content: `Is an American adult animated science fiction sitcom. The series
      follows the misadventures of cynical mad scientist Rick Sanchez and
      his good-hearted but fretful grandson Morty Smith, who split their
      time between domestic life and interdimensional adventures.`,
      link: ``
    }
  ]

  ngOnInit() {
  }

}
