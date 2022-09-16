import React from 'react'
import * as Loader from "react-loader-spinner";


export default function Wave() {
  return (
    <Loader.Oval
    height={20}
  width={20}
  color="white"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="gray"
  strokeWidth={2}
  strokeWidthSecondary={2}
  />
  )
}

