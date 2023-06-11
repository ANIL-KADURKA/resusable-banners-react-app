import './index.css'

const BannerCardItem = props => {
  const {BannerCardDetails, key} = props
  console.log(BannerCardDetails)
  const {headerText, description, className} = BannerCardDetails
  console.log(key)

  return (
    <li className={`card ${className}`}>
      <h1 className="head">{headerText}</h1>
      <p className="para">{description}</p>
      <button className="button" type="submit">
        Show More
      </button>
    </li>
  )
}

export default BannerCardItem
