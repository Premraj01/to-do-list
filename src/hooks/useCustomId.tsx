import React, { useEffect, useId, useState } from 'react'

const useCustomId = () => {

    const [id, setId] = useState(useId())

    return id


}

export default useCustomId