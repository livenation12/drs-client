import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { SourceType } from '@/models/proposal.model'
import { useAddProposalMutation } from '@/services/proposalApi'
import { useState } from 'react'

export default function ProposalsForm() {
          const [addProposal] = useAddProposalMutation();
          const [sourceType, setSourceType] = useState<SourceType>('External');

          const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault()
                    const formData = new FormData(event.currentTarget)
                    formData.append('sourceType', sourceType)
                    try {
                              // await addProposal(formData).unwrap();
                              console.log(formData);
                    } catch (error) {
                              console.error('Failed to submit proposal:', error);
                    }
          }

          const handleChange = (value: SourceType) => {
                    setSourceType(value);
          }

          return (
                    <Card>
                              <CardHeader>
                                        <CardTitle>Submit proposal</CardTitle>
                                        <CardDescription>Create a new proposal</CardDescription>
                              </CardHeader>
                              <CardContent>
                                        <form onSubmit={handleSubmit} encType='multipart/form-data' className='space-y-2'>
                                                  <div>
                                                            <Label htmlFor='source'>Source</Label>
                                                            <Input id='source' name='source' type='text' placeholder='Source' required />
                                                  </div>
                                                  <div>
                                                            <Label>Source type</Label>
                                                            <Select name='sourceType' onValueChange={handleChange} defaultValue={sourceType}>
                                                                      <SelectTrigger>
                                                                                <SelectValue placeholder="Select source type" />
                                                                      </SelectTrigger>
                                                                      <SelectContent>
                                                                                <SelectGroup>
                                                                                          <SelectLabel>Types</SelectLabel>
                                                                                          <SelectItem value='Internal'>Internal</SelectItem>
                                                                                          <SelectItem value='External'>External</SelectItem>
                                                                                </SelectGroup>
                                                                      </SelectContent>
                                                            </Select>
                                                  </div>
                                                  <div>
                                                            <Label htmlFor='title'>Title</Label>
                                                            <Input id='title' name='title' placeholder='Title' />
                                                  </div>
                                                  <div>
                                                            <Label htmlFor='description'>Description</Label>
                                                            <Textarea id='description' name='description' />
                                                  </div>
                                                  <div>
                                                            <Label htmlFor='attachment'>Attachment</Label>
                                                            <Input type='file' id='attachment' name='attachment' />
                                                  </div>
                                                  <Button type='submit' className='w-full'>Submit</Button>
                                        </form>
                              </CardContent>
                    </Card>
          )
}
