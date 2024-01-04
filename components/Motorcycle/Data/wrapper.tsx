import ErrorComponent from '@/components/Shared/ErrorComponent'
import Loading from '@/components/Shared/Loading'
import { useLoading } from '@/hooks/useLoading'
import { getData } from '@/utils/getData'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'
import Data from '.'
import Seo from '@/components/Shared/Seo'

export function MotorcycleWrapper({ }) {
  const router = useRouter()
  const { slug } = router.query

  const { data, isLoading, isError } = useQuery({ queryKey: [slug], queryFn: () => getData(`/motorcycles`, slug) })

  const loading = useLoading(isLoading, 500)

  if (loading) {
    return <Loading />
  }

  if (isError || !data.data.length) {
    return <ErrorComponent redirect />
  }

  const content = data.data[0].attributes;
  return (
    <>
      <Seo seo={content.seo} />
      <Data content={content} />
    </>
  )
}