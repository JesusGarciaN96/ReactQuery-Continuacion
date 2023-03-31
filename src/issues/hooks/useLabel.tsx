import { useQuery } from '@tanstack/react-query';

import { getLabelsService } from '../../services/issues.service';

export default function useLabel() {
  const labelQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabelsService,
  });

  return labelQuery;
}
