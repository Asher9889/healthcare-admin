import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Patients() {
    const patients = [
        { id: 1, name: "Alice Robinson", age: 34, condition: "Flu", room: "101" },
        { id: 2, name: "Bob Martin", age: 56, condition: "Hypertension", room: "102" },
        { id: 3, name: "Charlie Clarke", age: 22, condition: "Fracture", room: "105" },
        { id: 4, name: "Diana White", age: 45, condition: "Diabetes Checkup", room: "OPD" },
        { id: 5, name: "Evan Lewis", age: 78, condition: "Cardiac Monitoring", room: "ICU-2" },
    ];

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
            <Card>
                <CardHeader>
                    <CardTitle>In-Patient Records</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Age</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Condition</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Room</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {patients.map((patient) => (
                                    <tr key={patient.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle font-medium">{patient.name}</td>
                                        <td className="p-4 align-middle">{patient.age}</td>
                                        <td className="p-4 align-middle">{patient.condition}</td>
                                        <td className="p-4 align-middle">{patient.room}</td>
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
