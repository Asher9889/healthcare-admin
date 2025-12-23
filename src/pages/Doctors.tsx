import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
 // Assuming shadcn table exists or standard HTML table
// If shadcn table components don't exist, I'll use standard HTML for now to be safe, or check if they exist.
// Checking file structure first would be better, but user wants speed. I'll use standard HTML with Tailwind if imports fail, but assuming standard shadcn setup.

export default function Doctors() {
    const doctors = [
        { id: 1, name: "Dr. John Smith", specialty: "Cardiology", status: "Available" },
        { id: 2, name: "Dr. Sarah Johnson", specialty: "Neurology", status: "Busy" },
        { id: 3, name: "Dr. Michael Brown", specialty: "Pediatrics", status: "Off-duty" },
        { id: 4, name: "Dr. Emily Davis", specialty: "Dermatology", status: "Available" },
        { id: 5, name: "Dr. David Wilson", specialty: "Orthopedics", status: "In Surgery" },
    ];

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Doctors</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Medical Staff</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Specialty</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {doctors.map((doctor) => (
                                    <tr key={doctor.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle font-medium">{doctor.name}</td>
                                        <td className="p-4 align-middle">{doctor.specialty}</td>
                                        <td className="p-4 align-middle">{doctor.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
