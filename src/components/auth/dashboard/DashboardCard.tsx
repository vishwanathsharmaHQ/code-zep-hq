import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BriefcaseIcon } from 'lucide-react'
import React, { ExoticComponent, ReactNode } from 'react'

type Props = {
 title: string;
 stat: string;
 icon: ReactNode
}

const DashboardCard = (props: Props) => {
  return (
    <Card className="bg-transparent text-white border-gray-200/10">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-lg font-medium">{props.title}</CardTitle>
      {props.icon}
    </CardHeader>
    <CardContent className="py-10">
      <div className="text-2xl font-bold">{props.stat}</div>
    </CardContent>
  </Card>
  )
}

export default DashboardCard