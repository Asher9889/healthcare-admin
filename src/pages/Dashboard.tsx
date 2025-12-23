import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Calendar, FileText, Stethoscope, ArrowUpRight } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Hospital Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button>Download Report</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Doctors</CardTitle>
            <Stethoscope className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">+2 new joined this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,203</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Appointments Today</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+4 scheduled for afternoon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-muted-foreground">+12 published this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

        {/* Recent Appointments */}
        <Card className="col-span-4">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Appointments</CardTitle>
              <CardDescription>
                Today's latest appointment schedules.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <a href="#">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead className="hidden xl:table-column">Type</TableHead>
                  <TableHead className="hidden xl:table-column">Status</TableHead>
                  <TableHead className="hidden xl:table-column">Date</TableHead>
                  <TableHead className="text-right">Doctor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">liam@example.com</div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Check-up</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">2023-06-23</TableCell>
                  <TableCell className="text-right">Dr. Smith</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">olivia@example.com</div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Surgery</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Pending</span>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">2023-06-24</TableCell>
                  <TableCell className="text-right">Dr. Johnson</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emma Williams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">emma@example.com</div>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">Consultation</TableCell>
                  <TableCell className="hidden xl:table-column">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Completed</span>
                  </TableCell>
                  <TableCell className="hidden xl:table-column">2023-06-25</TableCell>
                  <TableCell className="text-right">Dr. Brown</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Activity / Departments Pulse */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Hospital Activity</CardTitle>
            <CardDescription>Real-time updates from departments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-center">
                <span className="relative flex h-2 w-2 mr-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Emergency Ward</p>
                  <p className="text-sm text-muted-foreground">New patient admitted (Trauma)</p>
                </div>
                <div className="ml-auto font-medium text-xs text-muted-foreground">2m ago</div>
              </div>
              <div className="flex items-center">
                <span className="relative flex h-2 w-2 mr-4">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Pharmacy</p>
                  <p className="text-sm text-muted-foreground">Stock replenished for Antibiotics</p>
                </div>
                <div className="ml-auto font-medium text-xs text-muted-foreground">15m ago</div>
              </div>
              <div className="flex items-center">
                <span className="relative flex h-2 w-2 mr-4">
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Cardiology</p>
                  <p className="text-sm text-muted-foreground">Dr. Smith started surgery</p>
                </div>
                <div className="ml-auto font-medium text-xs text-muted-foreground">1h ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
