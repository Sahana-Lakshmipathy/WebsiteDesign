import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img 
         src={imgURL}
         className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <div className="mt-3 flex justify-center items-center gap-2.5">
         <img 
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"
         />
         <p>({rating})</p>
      </div>
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div>
         <h4 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h4>
      </div>
   </div>
  )
}

export default ReviewCard