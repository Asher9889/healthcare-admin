import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, Brain, Baby, Activity, Bone } from "lucide-react";

export default function Departments() {
    const departments = [
        { name: "Cardiology", icon: Heart, desc: "Heart & Cardiovascular", staff: 12 },
        { name: "Neurology", icon: Brain, desc: "Brain & Nervous System", staff: 8 },
        { name: "Pediatrics", icon: Baby, desc: "Child Care", staff: 15 },
        { name: "Dermatology", icon: Activity, desc: "Skin Care", staff: 6 },
        { name: "Orthopedics", icon: Bone, desc: "Bones & Joints", staff: 10 },
    ];

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Departments</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {departments.map((dept) => (
                    <Card key={dept.name}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-full">
                                <dept.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle>{dept.name}</CardTitle>
                                <CardDescription>{dept.desc}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium">{dept.staff} Specialists</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
