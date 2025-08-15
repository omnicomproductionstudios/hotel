'use client'

import { BriefcaseConveyorBelt, BrushCleaning, Key, School } from "lucide-react"
import Link from "next/link"

export default function BestResort(){
    return(
        <div className="best_resort space">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                        <img src="images/about.jpg" alt="Best Resort" />
                    </div>
                    <div className="col-md-5">
                        <span>Enjoy your Stay</span>
                        <h2>Welcome to Mudfort Resort</h2>
                        <p>Aliquam erat volutpat. Quisque sed nisi hendrerit, consectetur ipsum sed, rhoncus ligula. Donec euismod laoreet tortor, non imperdiet libero aliquam in. Vestibulum varius condimentum volutpat. Nunc in sapien a orci maximus</p>
                        <ul>
                            <li><Key /> Suite Smart Key</li>
                            <li><BriefcaseConveyorBelt /> Luggage Deposit</li>
                            <li><School /> Room Service</li>
                            <li><BrushCleaning /> Daily Cleaning</li>
                        </ul>
                        <Link href="/" className="cta">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}