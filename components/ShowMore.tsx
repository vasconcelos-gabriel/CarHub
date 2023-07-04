'use client'
import { ShowMoreProps } from '@/types'
import { updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'
import CustomButton from './CustomButton'

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter()

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10

    const newPathname = updateSearchParams('limit', `${newLimit}`)

    router.push(newPathname)
  }

  return (
    <div className="flex-center mt-10 w-full gap-5">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Ver mais"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore
