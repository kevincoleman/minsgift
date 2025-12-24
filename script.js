function load() {
  let christmasDate = new Date('2025-12-25T05:00:00.000');
  const opened = christmasDate.valueOf() < Date.now()
  if (opened) {
    document.getElementById('giftDisplay').innerHTML = `
      <div id="giftDisplay">
        <h1>Merry Christmas Love!</h1>
        <img src="gift.jpg" alt="Your gift!">
        <p>I saw the kitten towel on your wishlist, and went rogue to get more Ayumi Horie into our kitchen. ;)</p>
      </div>
    `
  } else {

    const colors = [
      '#89a7a7',
      '#436436',
      '#5448c8',
      '#6f1a07',
      '#E2C044',
      '#A40606',
      '#D98324',
      '#63372C',
      '#C04CFD',
    ]

    const color = colors[Math.floor(Math.random()*colors.length)]

    document.getElementById('giftBox').style.width = (Math.random() * 150) + 200 + "px"
    document.getElementById('giftBox').style.height = (Math.random() * 250) + 150 + "px"
    document.getElementById('giftBox').style.rotate = Math.random() * 90 + "deg"
    let wrappings = document.querySelectorAll('.wrapping')
    console.log(wrappings)
    wrappings.forEach(wrapping => {
      console.log(wrapping)
      wrapping.style.backgroundColor = color
    })
  }
}